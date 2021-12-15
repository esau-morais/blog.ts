import { DateTime } from "luxon";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getRecentPosts, getSimilarPosts } from "../services";

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">
        {slug ? "Related posts" : "Recent posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="flex-none w-16">
            <img
              className="align-middle w-14 h-14 rounded-xl"
              src={post.featuredImage.url}
              alt={post.title}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {DateTime.fromISO(post.createdAt).toLocaleString(
                DateTime.DATE_FULL
              )}
            </p>
            <Link key={post.title} href={`/post/${post.slug}`} className="">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
