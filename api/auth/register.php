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

// 필수 필드 확인
$required_fields = ['name', 'email', 'password'];
foreach ($required_fields as $field) {
    if (!isset($data[$field]) || empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => '모든 필드를 입력해주세요.']);
        exit;
    }
}

// 이메일 형식 검증
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => '올바른 이메일 형식을 입력해주세요.']);
    exit;
}

// 비밀번호 길이 검증
if (strlen($data['password']) < 6) {
    http_response_code(400);
    echo json_encode(['error' => '비밀번호는 6자 이상이어야 합니다.']);
    exit;
}

// 이메일 중복 확인
$stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE email = ?');
$stmt->execute([$data['email']]);
if ($stmt->fetchColumn() > 0) {
    http_response_code(400);
    echo json_encode(['error' => '이미 사용 중인 이메일입니다.']);
    exit;
}

// 비밀번호 해시화
$hashed_password = password_hash($data['password'], PASSWORD_DEFAULT);

// 사용자 생성
$stmt = $pdo->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
try {
    $stmt->execute([$data['name'], $data['email'], $hashed_password]);
    
    // 생성된 사용자 정보 반환
    $user_id = $pdo->lastInsertId();
    $response = [
        'user' => [
            'id' => $user_id,
            'name' => $data['name'],
            'email' => $data['email']
        ]
    ];
    
    echo json_encode($response);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => '회원가입 중 오류가 발생했습니다.']);
}
?> 