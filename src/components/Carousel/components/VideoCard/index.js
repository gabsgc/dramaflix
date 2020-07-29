import React from 'react';
import { VideoCardContainer } from './style';

function getYouTubeId(youtubeURL) {
    return youtubeURL
        .replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    return (
        <VideoCardContainer
            url={image}
            href={videoURL}
            target="_blank"
            style={{ borderColor: categoryColor || 'red' }}
            title={videoTitle}
        >
            <VideoCardContainer.Title backgroundColor={categoryColor}>
                <VideoCardContainer.Title.Text>
                    {videoTitle}
                </VideoCardContainer.Title.Text>
            </VideoCardContainer.Title>
        </VideoCardContainer>
    );
}

export default VideoCard;