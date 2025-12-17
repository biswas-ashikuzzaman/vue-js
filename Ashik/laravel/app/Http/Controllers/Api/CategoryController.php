<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json([
            "categories" => Category::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2',
            'slug' => 'required|unique:categories',
            'parent' => 'nullable|exists:categories,id',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048', // 2MB
        ]);

        if ($validator->fails()) {
            return response()->json([
                "errors" => $validator->errors()
            ], 422);
        }

        $imageName = null;

        if ($request->hasFile('image')) {
            $imageName = time().'_'.$request->image->getClientOriginalName();
            $request->image->move(public_path('uploads/categories'), $imageName);
        }

        $category = Category::create([
            "name" => $request->name,
            "slug" => $request->slug,
            "parent_id" => $request->parent,
            "description" => $request->description,
            "image" => $imageName,
        ]);

        return response()->json([
            "message" => "Category created successfully!",
            "category" => $category
        ], 201);
    }
}
