import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function MobilesFullDescription() {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Carousel showArrows={false} showIndicators={false}>
        <div>
          <img src="https://images.unsplash.com/photo-1693827752936-6d5ffa9c4051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60" alt="img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1693827752936-6d5ffa9c4051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60" alt="img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1693827752936-6d5ffa9c4051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60" alt="img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1693827752936-6d5ffa9c4051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60" alt="img" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1693827752936-6d5ffa9c4051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60" alt="img" />
        </div>
      </Carousel>
    </div>
  );
}
