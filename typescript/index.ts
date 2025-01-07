// Single Responsibility Principle
// "A class should have only one reason to change." -- Robert C. Martin

// class BlogPost {
//   title: string;
//   content: string;

//   constructor(title: string, content: string) {
//     this.title = title;
//     this.content = content;
//   }

//   // Methods related to content management
//   createPost() {
//     // Implementation here
//   }

//   updatePost() {
//     // Implementation here
//   }

//   deletePost() {
//     // Implementation here
//   }

//   // Method related to post display
//   displayHTML() {
//     return `<h1>${this.title}</h1><p>${this.content}</p>`;
//   }
// }

// In the above example, displayHTML has nothing to do with the CRUD operations of blog post. SRP suggests that the displayHTML be implemented in a separate class as it handles a different problem.

// Here is a refactored example

// class BlogPosts {
//   title: string;
//   content: string;

//   constructor(title: string, content: string) {
//     this.title = title;
//     this.content = content;
//   }

//   // Methods related to content management
//   createPost() {
//     // Implementation here
//   }

//   updatePost() {
//     // Implementation here
//   }

//   deletePost() {
//     // Implementation here
//   }
// }

// class BlogPostsDisplay {
//   blogPost: BlogPosts;
//   constructor(blogPost: BlogPosts) {
//     this.blogPost = blogPost;
//   }

//   displayHTML() {
//     return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
//   }
// }

// Open - Closed Principle

// "The Open-Closed Principle states that "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification." -- Robert C. Martin

class Discount {
  giveDiscount(customerType: string): number {
    if (customerType === "Regular") {
      return 10;
    } else if (customerType === "Premium") {
      return 20;
    }
    return 0;
  }
}

// In the above example, if we want to introduce a new type of customer, let's say a " Gold" customer with a different discount, we would have to modify the giveDiscount method in the Discount class:

class DisCount {
  giveDiscount(customerType: string): number {
    if (customerType === "Regular") {
      return 10;
    } else if (customerType === "Premium") {
      return 20;
    } else if (customerType === "Gold") {
      return 30;
    }
    return 0;
  }
}
// This violates the Open-Closed Principle because we're altering existing code to accommodate the new functionality (a new customer type). According to the Open-Closed Principle, we should be able to add this new functionality by adding new code (extending), not by changing existing code. Here is how you should implement it:

interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class DisCounts {
  constructor(public customer: Customer) {}

  giveDiscount(): number {
    return this.customer.giveDiscount();
  }
}

let premium: PremiumCustomer = new PremiumCustomer();
let regular: RegularCustomer = new RegularCustomer();

let discount: DisCounts = new DisCounts(premium);
let discountR: DisCounts = new DisCounts(regular);

console.log(discount.giveDiscount());
console.log(discountR.giveDiscount());
