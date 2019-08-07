<?php

class Api extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('news_model');
		$this->load->database();

	}

	public function get()
	{
		$query = $this->db->query('select * from test order by publication desc');
		return print_r(json_encode($query->result()));
	}
}
