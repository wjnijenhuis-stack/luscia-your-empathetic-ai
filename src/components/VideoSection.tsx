const VideoSection = () => {
  // Video data
  const videos = [
    {
      id: 1,
      title: "Bedverhoger",
      description: "Zie hoe Luscia omgaat met vragen over bedverhogers en praktische hulpmiddelen en doorverwijst.",
      src: "/videos/Luscia bedverhoger.mp4",
    },
    {
      id: 2,
      title: "Bloedonderzoek",
      description: "Ontdek hoe Luscia cliënten informeert over bloedonderzoek en uitslagen.",
      src: "/videos/Luscia bloedonderzoek.mp4",
    },
    {
      id: 3,
      title: "Eenzaamheid",
      description: "Zie hoe Luscia empathisch omgaat met gevoelige onderwerpen zoals eenzaamheid en doorverwijst.",
      src: "/videos/luscia eenzaam2.mp4",
    },
    {
      id: 4,
      title: "Engels",
      description: "Luscia communiceert vloeiend in het Engels met internationale cliënten.",
      src: "/videos/Luscia engels.mp4",
    },
    {
      id: 5,
      title: "Ziek kind",
      description: "Hoe Luscia zorgzaam omgaat met bezorgde ouder over een ziek kind en doorverwijst naar de huisartsassistent.",
      src: "/videos/luscia ziek kind.mp4",
    },
  ];

  return (
    <section id="leer-luscia-kennen" className="py-20 md:py-32 bg-background">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Leer Luscia kennen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ontdek hoe Luscia uw praktijk kan ondersteunen.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Video Container */}
                <div className="relative w-full aspect-video bg-secondary/30">
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                    loading="lazy"
                    playsInline
                  >
                    Je browser ondersteunt geen video element.
                  </video>
                </div>

                {/* Video Info */}
                <div className="p-5 lg:p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
