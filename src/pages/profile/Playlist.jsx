import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getUserPlayListApi } from "../../api/playlistApi/playListApi";

const Playlist = () => {
  const { userId } = useParams();

  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await getUserPlayListApi(userId);
        setPlaylists(response.data.data || []);
      } catch (error) {
        console.error("Error fetching playlists:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) fetchPlaylist();
  }, [userId]);

  if (isLoading) {
    return <div className="p-6 text-center">Loading playlists...</div>;
  }

  if (isError) {
    return <div className="p-6 text-center text-red-500">Failed to load playlists</div>;
  }

  if (!playlists.length) {
    return <div className="p-6 text-center text-gray-400">No playlists yet</div>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist) => {
          const cover = playlist.thumbnail;

          return (
            <Link key={playlist._id} to={`/playlist/${playlist._id}`}>
              <div className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
                  {cover ? (
                    <img
                      src={cover}
                      alt={playlist.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-500">
                      No videos
                    </div>
                  )}

                  {/* Video count */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
                    <span className="uppercase tracking-wide">Playlist</span>
                    <span>{playlist.totalVideos} videos</span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-3">
                  <h3 className="font-semibold line-clamp-2">
                    {playlist.name}
                  </h3>

                  {playlist.description && (
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      {playlist.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
