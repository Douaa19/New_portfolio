<?php

class AdminController extends Controller {
    public function __construct() {
        $this->adminModel = $this->model('Admin');
    }

    public function index() {
        $this->view('admin/homePage');
    }
}