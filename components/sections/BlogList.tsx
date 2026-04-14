import styles from "@/components/sections/BlogList.module.css";

type Post = {
  title: string;
  date: string;
  excerpt: string;
};

type BlogListProps = {
  featured: Post;
  posts: Post[];
};

export function BlogList({ featured, posts }: BlogListProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <article className={styles.featured}>
          <h1>{featured.title}</h1>
          <h2>{featured.excerpt}</h2>
          <p className={styles.date}>{featured.date}</p>
        </article>

        <div className={styles.stack}>
          {posts.map((post) => (
            <article key={post.title} className={styles.item}>
              <h3>{post.title}</h3>
              <p className={styles.date}>{post.date}</p>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
