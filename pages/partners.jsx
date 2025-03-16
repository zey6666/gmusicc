
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/logoo.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://codeshare.me">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://media.discordapp.net/attachments/1242113972262670336/1350764411853213737/wlogo.jpg?ex=67d7ece3&is=67d69b63&hm=96027e64eb43cecf20a3ebc34b9fceefb2dcbfde6bddad896c3133cfaaf55acd&=&format=webp&width=216&height=216" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Whatif Studios</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      🎥 Welcome to WhatIf Studios!At WhatIf Studios, we bring your favorite movies to life through epic fan-made trailers and creative reimaginings. From Bollywood to Kollywood, Mollywood to Tollywood — we cover movies across India's diverse film industries.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
