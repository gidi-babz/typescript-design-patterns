// Single Responsibility Principle
// "A class should have only one reason to change." -- Robert C. Martin

class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }

  // Method related to post display
  displayHTML() {
    return `<h1>${this.title}</h1><p>${this.content}</p>`;
  }
}

// In the above example, displayHTML has nothing to do with the CRUD operations of blog post. SRP suggests that the displayHTML be implemented in a separate class as it handles a different problem.

// Here is a refactored example

class BlogPosts {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }
}

class BlogPostsDisplay {
  blogPost: BlogPosts;
  constructor(blogPost: BlogPosts) {
    this.blogPost = blogPost;
  }

  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}
