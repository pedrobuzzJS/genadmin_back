import Model from "../Abstracts/Model";

export default class Menu extends Model {

	protected columns = [
		'id',
		'name',
		'parameters',
		'route',
		'icon',
		'parent_id',
		'component',
		'har_children',
		'order',
		'disabled',
		'status_id',
		'created_at',
		'updated_at'
	]
}