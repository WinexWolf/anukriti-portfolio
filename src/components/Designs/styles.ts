import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  padding: 10px 0;
`;

export const FullscreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;

  img, video {
    max-width: 90%;
    max-height: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
