<?php
require_once '../config/database.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

// POST 데이터 받기
$data = json_decode(file_get_contents('php://input'), true);

// 필수 필드 검증
$required = ['email', 'password'];
$missing = validateRequiredFields($data, $required);
if (!empty($missing)) {
    sendError('Missing required fields: ' . implode(', ', $missing));
}

try {
    // 사용자 조회
    $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$data['email']]);
    $user = $stmt->fetch();

    if (!$user) {
        sendError('Invalid email or password');
    }

    // 비밀번호 검증
    if (!password_verify($data['password'], $user['password'])) {
        sendError('Invalid email or password');
    }

    // JWT 토큰 생성 (실제 구현에서는 JWT 라이브러리 사용)
    $token = base64_encode(json_encode([
        'user_id' => $user['id'],
        'email' => $user['email'],
        'exp' => time() + (60 * 60 * 24) // 24시간
    ]));

    // 응답
    sendResponse([
        'message' => 'Login successful',
        'token' => $token,
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email']
        ]
    ]);

} catch (PDOException $e) {
    sendError('Database error: ' . $e->getMessage(), 500);
}
?> 