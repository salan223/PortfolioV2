import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Camera, Eye, Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Photography: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Nature', 'Architecture', 'Street', 'Portrait', 'Travel'];

  // Photography portfolio with real images
  const photos = [
    {
      id: 1,
      title: "Mountains",
      category: "Nature",
      location: "Mustang, Nepal",
      likes: 24,
      views: 156,
      image: "/mountain.jpg"
    },
    {
      id: 2,
      title: "Forest",
      category: "Nature",
      location: "Caledon, ON",
      likes: 18,
      views: 89,
      image: "/forest.jpg"
    },
    {
      id: 3,
      title: "CN Tower",
      category: "City",
      location: "Downtown Toronto",
      likes: 32,
      views: 201,
      image: "/cn.jpg"
    },
    {
      id: 4,
      title: "Bergeron Engineering Building",
      category: "Architecture",
      location: "York University",
      likes: 45,
      views: 312,
      image: "/berg.jpg"
    },
    {
      id: 5,
      title: "Modern Building",
      category: "Architecture",
      location: "York University",
      likes: 28,
      views: 134,
      image: "/york.jpg"
    },
    {
      id: 6,
      title: "Weekend Concert",
      category: "City",
      location: "Toronto, ON",
      likes: 52,
      views: 278,
      image: "/weekend.jpg"
    },
    {
      id: 7,
      title: "Transmission line",
      category: "sunset",
      location: "Vaughan, ON",
      likes: 36,
      views: 167,
      image: "/line.jpg"
    },
    {
      id: 8,
      title: "City",
      category: "City",
      location: "Humberwest Condos",
      likes: 29,
      views: 143,
      image: "/city.jpg"
    }
  ];

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    const currentIndex = selectedImageIndex;
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImageIndex(newIndex);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isModalOpen) return;

    if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    } else if (e.key === 'Escape') {
      closeImageModal();
    }
  };

  React.useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => handleKeyDown(e);
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [isModalOpen, selectedImageIndex]);

  return (
    <section id="photography" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Photography Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments and perspectives through the lens
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`hover:scale-105 transition-all duration-200 ${selectedCategory === category
                  ? 'bg-primary hover:bg-primary/90'
                  : 'border-primary/30 hover:border-primary'
                }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card
              key={photo.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer border-2 hover:border-primary/30"
              onClick={() => openImageModal(index)}
            >
              {/* Photo */}
              <div className="aspect-square bg-muted relative overflow-hidden">
                <ImageWithFallback
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center space-y-2">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="font-semibold">{photo.title}</h3>
                    <p className="text-sm">{photo.location}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="text-xs">
                    {photo.category}
                  </Badge>
                </div>
              </div>

              {/* Photo Stats */}
              <div className="p-3 space-y-2">
                <h3 className="font-medium group-hover:text-primary transition-colors duration-300">
                  {photo.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{photo.location}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{photo.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{photo.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-7xl max-h-[90vh] p-0 overflow-hidden bg-black/95 border-none">
            {selectedImageIndex !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 bg-black/50"
                  onClick={closeImageModal}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 bg-black/50"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 bg-black/50"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <div className="w-full h-full flex items-center justify-center p-8">
                  <ImageWithFallback
                    src={filteredPhotos[selectedImageIndex].image}
                    alt={filteredPhotos[selectedImageIndex].title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white max-w-4xl mx-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">
                          {filteredPhotos[selectedImageIndex].title}
                        </h3>
                        <p className="text-white/80 mb-2">
                          📍 {filteredPhotos[selectedImageIndex].location}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {filteredPhotos[selectedImageIndex].category}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-6 text-white/80">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-5 w-5" />
                          <span>{filteredPhotos[selectedImageIndex].likes}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="h-5 w-5" />
                          <span>{filteredPhotos[selectedImageIndex].views}</span>
                        </div>
                        <div className="text-sm">
                          {selectedImageIndex + 1} / {filteredPhotos.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30">
            <h3 className="text-lg font-semibold mb-2">More Photos Available</h3>
            <p className="text-muted-foreground mb-4">
              View my complete photography portfolio on social platforms
            </p>
            <a href="https://www.instagram.com/salan_photography/?hl=en" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary/50 hover:border-primary">
                <Camera className="h-4 w-4 mr-2" />
                View Full Portfolio
              </Button>
            </a>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default Photography;