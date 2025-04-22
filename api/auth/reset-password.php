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
if (!isset($data['email']) || empty($data['email'])) {
    http_response_code(400);
    echo json_encode(['error' => '이메일을 입력해주세요.']);
    exit;
}

// 이메일 형식 검증
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => '올바른 이메일 형식을 입력해주세요.']);
    exit;
}

// 사용자 확인
$stmt = $pdo->prepare('SELECT id, name FROM users WHERE email = ?');
$stmt->execute([$data['email']]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    http_response_code(404);
    echo json_encode(['error' => '해당 이메일로 등록된 사용자가 없습니다.']);
    exit;
}

// 임시 비밀번호 생성
$temp_password = bin2hex(random_bytes(4));
$hashed_password = password_hash($temp_password, PASSWORD_DEFAULT);

// 비밀번호 업데이트
$stmt = $pdo->prepare('UPDATE users SET password = ? WHERE id = ?');
try {
    $stmt->execute([$hashed_password, $user['id']]);
    
    // 이메일로 임시 비밀번호 전송 (실제 구현 시 이메일 발송 로직 추가)
    $response = [
        'message' => '임시 비밀번호가 이메일로 전송되었습니다.',
        'temp_password' => $temp_password // 개발 테스트용으로 임시 비밀번호 반환
    ];
    
    echo json_encode($response);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => '비밀번호 재설정 중 오류가 발생했습니다.']);
}
?> 