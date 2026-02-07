import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SuggestedVideo from "../../components/SuggestedVideo";

import { getPlayListByIdApi } from "../../api/playlistApi/playListApi";

const PlayListTab = () => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const res = await getPlayListByIdApi(playlistId);
        setPlaylist(res.data.data);
      } catch (error) {
        console.error("Failed to fetch playlist", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [playlistId]);

  if (loading) {
    return <p className="p-4 text-gray-400">Loading playlist...</p>;
  }

  if (!playlist) {
    return <p className="p-4 text-red-400">Playlist not found</p>;
  }

  return (
    <div className="mt-4 ml-4 flex gap-5 flex-wrap">
      {/* Playlist Info */}
      <div className="w-[500px]">
      <div className="relative h-[350px] overflow-hidden rounded-lg">
  <img
    className="h-full w-full object-cover"
    src={playlist.thumbnail}
    alt="playlist thumbnail"
  />

  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
    <span className="uppercase tracking-wide">Playlist</span>
    <span>{playlist.totalVideos} videos</span>
  </div>
</div>

        <div className="mt-2">
          <h2 className="text-lg font-semibold">{playlist.name}</h2>
          <p className="text-sm text-gray-400">{playlist.description}</p>
        </div>
      </div>

      {/* Videos List */}
      <div className="flex flex-col gap-3">
        {playlist.videos.map((video) => (
          <SuggestedVideo key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default PlayListTab;
