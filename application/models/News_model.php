<?php

class News_model extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function select_all(): array
	{
		$this->db->order_by("publication desc");
		$query = $this->db->get('test');
		return $query->result_array();
	}
}
