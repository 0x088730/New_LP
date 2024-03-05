export default function Contact({handleImageLoad}) {
  const goPlay = () => {
    const newPageURL = 'https://play.cryptoshowdown.io/';
    window.open(newPageURL, '_blank');
  }
  const goTelegram = () => {
    const newPageURL = 'https://t.me/cryptoshowdown';
    window.open(newPageURL, '_blank');
  } 
  const goDiscord = () => {
    const newPageURL = 'https://discord.gg/9FRAyNg9Qh ';
    window.open(newPageURL, '_blank');
  } 
  const goTwitter = () => {
    const newPageURL = 'https://twitter.com/Crypto_Showdown';
    window.open(newPageURL, '_blank');
  } 
  return (
    <div className="w-full pt-32 bg-[url('../../public/assets/images/footer/back.jpg')] bg-cover">
      <div className="relative w-[350px] h-[300px] lg:w-[772px] lg:h-[700px] bottom-0 mx-auto">
        <img src="assets/images/footer/window1.png" alt="" className="absolute w-full h-full"/>
        <div className="flex justify-center px-10">
            <img src="assets/images/footer/discordBtn1.png" alt="" className="w-1/4 duration-500 -translate-y-8 cursor-pointer z-8 lg:-translate-y-14 hover:brightness-125" onClick={goDiscord} />
            <img src="assets/images/footer/twBtn1.png" alt="" className="w-1/4 duration-500 -translate-y-8 cursor-pointer z-8 lg:-translate-y-14 hover:brightness-125" onClick={goTwitter}/>
            <img src="assets/images/footer/tgBtn1.png" alt="" className="w-1/4 duration-500 -translate-y-8 cursor-pointer z-8 lg:-translate-y-14 hover:brightness-125" onClick={goTelegram} />
        </div>
        <div className="">
            <img src="assets/images/footer/playBtn1.png" alt="" className="w-1/2 mx-auto duration-500 cursor-pointer z-8 translate-y-44 lg:translate-y-72 hover:brightness-125" onClick={goPlay} />

        </div>
        
      </div>
      <div className="flex items-center justify-center w-full h-40 bg-gray-800">
        <p className="text-white font-animeace">
          E-MAIL: ADM@SOURCE-CODE.WORK
        <br/>
          © SOURCECODE
        <br/>
          ALL RIGHTS RESERVERD
        </p>
      </div>
    </div>

  );
}
