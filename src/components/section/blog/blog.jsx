import { HStack, Text } from "@chakra-ui/react";
import "./blog.css";

export const BlogSection = () => {
  const blogInfo = [
    {
      name: "What is Temporal Dead Zone?",
      link: "https://medium.com/@vrindamahajan96/temporal-dead-zone-54e9198216cc",
      time: 2,
      content:
        "Hey👋, if you are facing issues in understanding the temporal dead zone concept in javascript, then you have come to the right place. In this article, I am going to start by explaining to you the term hoisting and how it is related to the temporal dead zone.",
    },
    {
        name: "What is Cryptocurrency?",
        link: "https://medium.com/@vrindamahajan96/cryptocurrency-f238a218f9ec",
        time: 2,
        content:
          "In this blog, I am going to explain an immensely used application of Blockchain Technology that is in cryptocurrency, and in order to understand cryptocurrency, we will look at the current money system. The present money system is based on the concept of Fiat Money. Fiat Money is the currency or the money issued by the government of a country.",
      },
      {
        name: "How does the Internet Work?",
        link: "https://vrinda-mahajan.hashnode.dev/how-does-the-internet-work",
        time: 2,
        content:
          "The Internet is a thing that we use every single day and we completely take it for granted. It is really important that we understand how the internet actually works as it is fundamental in understanding web development. The Internet simply is a long piece of wire that connects different computers with each other to communicate and share data through this giant wire.",
      },
  ];
  return (
    <div id="blogs" className="blog-section">
      <Text className="bold-heading">My Blogs</Text>
      <HStack spacing={16} justifyContent="center">
        {blogInfo.map((blog)=>
        <div className="blog-card">
        <a
          target="_blank"
          href={blog.link}
        >
          <Text className="blog-heading">{blog.name}</Text>
        </a>
        <Text className="blog-read-time" fontSize="xl">
          <i class="fa-solid fa-clock"></i>{blog.time} min read
        </Text>
        <Text className="blog-content">
          {blog.content}
        </Text>
      </div>
        )}
      </HStack>
    </div>
  );
};
