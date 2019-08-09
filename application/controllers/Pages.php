<?php

class Pages extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('news_model');
		$this->load->helper('url');
	}

	public function view()
	{
		$data['bdd'] = $this->news_model->select_all();
		$this->load->view('templates/header', $data);
		$this->load->view('pages/home', $data);
		$this->load->view('templates/footer', $data);

	}

}
