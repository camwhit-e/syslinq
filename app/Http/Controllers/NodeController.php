<?php

namespace App\Http\Controllers;

use App\Models\Node;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\NodeRequest;

class NodeController extends Controller
{
    public function index(Request $request)
    {
        $nodes = Node::all();

        return Inertia::render('nodes/index', [
            'data' => $nodes,
        ]);
    }

    public function store(NodeRequest $request)
    {
        $validated = $request->validated();

        $validated['user_id'] = $request->user()->id;

        $node = Node::create($validated);

        return Inertia::render('nodes/index');
    }

    public function view(Request $request, Node $node)
    {
        

        return Inertia::render('nodes/view', [
            'node' => $node,
        ]);
    }
}
