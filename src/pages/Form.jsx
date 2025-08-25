import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

export default function Form() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
    
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">📝 Mon Blog</h1>
        <PostForm />
        <PostList />
      </div>
    </div>
  );
}
