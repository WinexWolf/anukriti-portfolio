import React, { useState } from 'react';
import { Container, Title, Grid, Card, Image, Video, CardTitle, FullscreenContainer } from './styles';
import calfit from '../../assets/calfit.png';
import sustain from '../../assets/sustain.png';
import esn from '../../assets/esn.png';
import wellnest from '../../assets/wellnest.png';
import strai from '../../assets/strai.png';

const designs = [
  { id: 1, title: 'CalFit App', mediaUrl: calfit, type: 'image' },
  { id: 2, title: 'Sustain', mediaUrl: sustain, type: 'image' },
  { id: 3, title: 'ESN', mediaUrl: esn, type: 'image' },
  { id: 4, title: 'Wellnest', mediaUrl: wellnest, type: 'image' },
  { id: 5, title: 'Strai', mediaUrl: strai, type: 'image' },

  // Add more designs as needed
];

export function Designs(): JSX.Element {
  const [fullscreenMedia, setFullscreenMedia] = useState<{ url: string, type: string } | null>(null);

  const handleMediaClick = (mediaUrl: string, type: string) => {
    setFullscreenMedia({ url: mediaUrl, type });
  };

  const handleCloseFullscreen = () => {
    setFullscreenMedia(null);
  };

  return (
    <Container id="designs">
      <Title>My Designs</Title>
      <Grid>
        {designs.map(design => (
          <Card key={design.id}>
            {design.type === 'image' ? (
              <Image 
                src={design.mediaUrl} 
                alt={design.title} 
                onClick={() => handleMediaClick(design.mediaUrl, design.type)} 
              />
            ) : (
              <Video 
                src={design.mediaUrl} 
                controls 
                onClick={() => handleMediaClick(design.mediaUrl, design.type)} 
              />
            )}
{/*             <CardTitle>{design.title}</CardTitle>
 */}          </Card>
        ))}
      </Grid>
      {fullscreenMedia && (
        <FullscreenContainer onClick={handleCloseFullscreen}>
          {fullscreenMedia.type === 'image' ? (
            <img src={fullscreenMedia.url} alt="Fullscreen View" />
          ) : (
            <video src={fullscreenMedia.url} controls autoPlay style={{ width: '100%', height: '100%' }} />
          )}
        </FullscreenContainer>
      )}
    </Container>
  );
}
