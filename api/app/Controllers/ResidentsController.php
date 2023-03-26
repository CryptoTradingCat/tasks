<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\Residents;


class ResidentsController extends Controller
{

    public function getResidents($request, $response)
    {
        $residents = Residents::all([
        'id',
        'residents_name',
        'residents_genre',
        'residents_monday_tasks',
        'residents_tuesday_tasks',
        'residents_wednesday_tasks',
        'residents_thursday_tasks',
        'residents_friday_tasks',
        'residents_saturday_tasks',
        'residents_sunday_tasks',
        'residents_total_tasks',
        'updated_at']);
        return $response->withHeader('Content-Type', 'application/json')
               ->withJson($residents, 200);
    }

    public function getResident($request, $response)
    {
        $id = $request->getAttribute('id');
        $residents = Residents::all([
            'id',
            'residents_name',
            'residents_genre',
            'residents_monday_tasks',
            'residents_tuesday_tasks',
            'residents_wednesday_tasks',
            'residents_thursday_tasks',
            'residents_friday_tasks',
            'residents_saturday_tasks',
            'residents_sunday_tasks',
            'residents_total_tasks',
            'updated_at']);
        $data = $residents->find($id);
        return $response->withHeader('Content-Type', 'application/json')
         ->withJson($data, 200);
    }

    public function deleteResident($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $resident = Residents::all([
        'id',
        'residents_name',
        'residents_genre',
        'residents_monday_tasks',
        'residents_tuesday_tasks',
        'residents_wednesday_tasks',
        'residents_thursday_tasks',
        'residents_friday_tasks',
        'residents_saturday_tasks',
        'residents_sunday_tasks',
        'residents_total_tasks'
        ]);
        $data = $resident->find($id);
        $data = $data->delete();
            return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 200);
    }

    public function updateResident($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $resident = Residents::all([
        'id',
        'residents_name',
        'residents_genre',
        'residents_monday_tasks',
        'residents_tuesday_tasks',
        'residents_wednesday_tasks',
        'residents_thursday_tasks',
        'residents_friday_tasks',
        'residents_saturday_tasks',
        'residents_sunday_tasks',
        'residents_total_tasks'
        ]);
        $data = $resident->find($id);
        if (!empty($request->getParam('residents_name',))) {
            $data->residents_name = $request->getParam('residents_name',);
        }
        if (!empty($request->getParam('residents_genre',))) {
            $data->residents_genre = $request->getParam('residents_genre',);
        }
        if (!empty($request->getParam('residents_monday_tasks',))) {
            $data->residents_monday_tasks = $request->getParam('residents_monday_tasks',);
        }
        if (!empty($request->getParam('residents_tuesday_tasks',))) {
            $data->residents_tuesday_tasks = $request->getParam('residents_tuesday_tasks',);
        }
        if (!empty($request->getParam('residents_wednesday_tasks',))) {
            $data->residents_wednesday_tasks = $request->getParam('residents_wednesday_tasks',);
        }
        if (!empty($request->getParam('residents_thursday_tasks',))) {
            $data->residents_thursday_tasks = $request->getParam('residents_thursday_tasks',);
        }
        if (!empty($request->getParam('residents_friday_tasks',))) {
            $data->residents_friday_tasks = $request->getParam('residents_friday_tasks',);
        }
        if (!empty($request->getParam('residents_saturday_tasks',))) {
            $data->residents_saturday_tasks = $request->getParam('residents_saturday_tasks',);
        }
        if (!empty($request->getParam('residents_sunday_tasks',))) {
            $data->residents_sunday_tasks = $request->getParam('residents_sunday_tasks',);
        }
        if (!empty($request->getParam('residents_total_tasks',))) {
        $data->residents_total_tasks = $request->getParam('residents_total_tasks',);
        }
        $data->save();
        return $response->withHeader('Content-Type', 'application/json')
        ->withJson($data, 200);
    }

    public function addResident($request, $response, $args)
    {   
       
       $action = Residents::create([
        'residents_name' => $request->getParam('residents_name'),
        'residents_genre' => $request->getParam('residents_genre'),
        'residents_monday_tasks' => $request->getParam('residents_monday_tasks'),
        'residents_tuesday_tasks' => $request->getParam('residents_tuesday_tasks'),
        'residents_wednesday_tasks' => $request->getParam('residents_wednesday_tasks'),
        'residents_thursday_tasks' => $request->getParam('residents_thursday_tasks'),
        'residents_friday_tasks' => $request->getParam('residents_friday_tasks'),
        'residents_saturday_tasks' => $request->getParam('residents_saturday_tasks'),
        'residents_sunday_tasks' => $request->getParam('residents_sunday_tasks'),
        'residents_total_tasks' => $request->getParam('residents_total_tasks'),
        ]);
        $data = array('message' => 'Residents registered with success.');
        return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 201);
        
    }
}