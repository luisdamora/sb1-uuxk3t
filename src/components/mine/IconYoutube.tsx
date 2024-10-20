import React, {FC} from 'react';

interface Props {

}

export const ColorIconYouTube: string = '#FF0000';

export const IconYoutube: FC<Props> = ({}): React.ReactNode => {
    return (
        // <div
        //     className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full bg-green-500 p-4 shadow-lg transition-transform hover:scale-110"
        // >
            <img src="src/assets/images/youtube.svg" alt="YouTube" className={`h-8 w-8 fill-[#FF0000]`}/>
        // </div>
    );
};
