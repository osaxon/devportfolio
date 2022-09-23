import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen bg-zinc-50 dark:bg-zinc-700'>
      <div className='layout py-20'>
        <h2>About</h2>
        <h1>Oli Saxon</h1>
        <div className='flex flex-col items-center md:flex-row md:items-start'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio a,
            fugiat earum dolorem molestiae, esse dolor totam voluptatum veniam,
            temporibus sapiente unde quia! Commodi alias ipsam laudantium omnis
            distinctio reprehenderit perspiciatis deleniti molestiae explicabo,
            pariatur placeat, libero provident! Ipsa molestias dolorum quis
            molestiae repellendus! Officia sit alias sunt ullam repudiandae
            laboriosam corrupti doloribus atque iste? A incidunt fuga non amet
            ab esse rerum explicabo illum possimus cum commodi consequatur
            nostrum ipsum obcaecati aliquam facilis officia quam eveniet id
            beatae atque, alias blanditiis. Consequatur alias numquam, amet eius
            sequi explicabo tempore, soluta recusandae quis nulla quasi
            officiis, laboriosam nobis nostrum aliquam!
          </p>
          <div className='mt-10 flex-shrink-0 px-10 md:mt-0'>
            <Image
              src='https://res.cloudinary.com/djaiep6vj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1663946907/Images/Me_and_Violetta_qsna4r.png'
              className='rounded-full'
              alt='picture of me with my cat'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
