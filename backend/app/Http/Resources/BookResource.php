<?php

namespace App\Http\Resources;

use App\Models\Author;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap='book';
    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'title'=>$this->resource->title,
            'description'=>$this->resource->description,
            'user_id'=>new UserResource(User::find($this->resource->id_user)),
            'author_id'=>new AuthorResource(Author::find($this->resource->id_author)),
            'category_id'=>new CategoryResource(Category::find($this->resource->id_category))
        ];
    }
}
