<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $articles = Article::query()
            ->select('title', 'slug', 'user_id', 'picture', 'teaser', 'created_at', 'id')
            ->with('tags')
            ->limit(9)
            ->get();

        return Inertia('Home', [
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }
}
