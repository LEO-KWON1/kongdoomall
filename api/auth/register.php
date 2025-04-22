<?php
require_once '../config/database.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

// POST 데이터 받기
$data = json_decode(file_get_contents('php://input'), true);

// 필수 필드 검증
$required = ['name', 'email', 'password'];
$missing = validateRequiredFields($data, $required);
if (!empty($missing)) {
    sendError('Missing required fields: ' . implode(', ', $missing));
}

// 이메일 형식 검증
if (!validateEmail($data['email'])) {
    sendError('Invalid email format');
}

// 비밀번호 길이 검증
if (strlen($data['password']) < 6) {
    sendError('Password must be at least 6 characters long');
}

try {
    // 이메일 중복 확인
    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
    $stmt->execute([$data['email']]);
    if ($stmt->fetch()) {
        sendError('Email already exists');
    }

    // 비밀번호 해시화
    $hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);

    // 사용자 생성
    $stmt = $pdo->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
    $stmt->execute([$data['name'], $data['email'], $hashedPassword]);
    
    $userId = $pdo->lastInsertId();

    // 응답
    sendResponse([
        'message' => 'User registered successfully',
        'user' => [
            'id' => $userId,
            'name' => $data['name'],
            'email' => $data['email']
        ]
    ], 201);

} catch (PDOException $e) {
    sendError('Database error: ' . $e->getMessage(), 500);
}
?> 