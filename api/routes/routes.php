<?php




use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;

require __DIR__ . '/../configs/settings.php';
define('JWTKEY', $settings['settings']['jwtKey']);

$app->group('/api/tasks', function () use ($app) {
    $app->get('/', 'Home:getHome');
    $app->group('/resident' , function () use ($app) {
        $app->get('s', 'ResidentsController:getResidents');
        $app->get('/{id}', 'ResidentsController:getResident');
        $app->post('/delete/{id}', 'ResidentsController:deleteResident');
        $app->post('/update/{id}', 'ResidentsController:updateResident');
        $app->post('/add', 'ResidentsController:addResident');

    });
    
});
    

   