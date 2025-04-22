<?php
header('Content-Type: application/json');

// 데이터베이스 연결 설정
$host = 'localhost';
$dbname = 'kojkhj614';
$username = 'kojkhj614';
$password = 'dothome!23';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => '데이터베이스 연결 실패']);
    exit;
}

// POST 데이터 받기
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['email']) || !isset($data['password'])) {
    http_response_code(400);
    echo json_encode(['error' => '이메일과 비밀번호를 입력해주세요.']);
    exit;
}

// 사용자 확인
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
$stmt->execute([$data['email']]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user || !password_verify($data['password'], $user['password'])) {
    http_response_code(401);
    echo json_encode(['error' => '이메일 또는 비밀번호가 올바르지 않습니다.']);
    exit;
}

// 토큰 생성 (간단한 예시)
$token = bin2hex(random_bytes(32));

// 응답 데이터
$response = [
    'user' => [
        'id' => $user['id'],
        'name' => $user['name'],
        'email' => $user['email']
    ],
    'token' => $token
];

echo json_encode($response);
?> 