export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About DeerBlog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to DeerBlog! This platform was established as a hub for students to share their insights, experiences, 
            and knowledge with fellow peers in the realm of computer science and related fields. Our founder, deeply passionate 
            about fostering a community of learners, initiated this project to empower students to express their thoughts and ideas.
            </p>

            <p>
            At DeerBlog, you'll discover a plethora of articles, tutorials, and discussions crafted by students and enthusiasts alike.
             Whether you're delving into the intricacies of algorithms, exploring the latest advancements in artificial intelligence, 
             or unraveling the mysteries of software development, there's something here for every curious mind.
            </p>

            <p>
            We strive to provide a diverse array of content, ranging from course-related material to broader topics within the realm of technology.
             As the community continues to evolve, we encourage active participation through comments, likes, and engaging discussions. 
             Together, we believe in the power of collaboration and mutual support to propel each other towards greater heights of knowledge 
             and understanding.
            </p>

            <p>
            So, whether you're a seasoned coder, a budding developer, or simply an avid learner, join us on DeerBlog as 
            we embark on this journey of exploration and discovery in the vast landscape of computer science. Stay tuned for 
            regular updates and fresh perspectives from our vibrant community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}