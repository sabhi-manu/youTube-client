import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSubscribedChannelsApi } from "../../api/subscriptionApi/subscription";


const Following = () => {
  const { userId } = useParams();

  const [channels, setChannels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchSubscribedChannels = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await getSubscribedChannelsApi(userId);
        console.log('check the response of subscriberd channel===>',response)
        setChannels(response.data.data || []);
      } catch (error) {
        console.error("Failed to fetch subscribed channels", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) fetchSubscribedChannels();
  }, [userId]);

  if (isLoading) {
    return <div className="p-4 text-center">Loading subscriptions...</div>;
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">
        Failed to load subscriptions
      </div>
    );
  }

  if (!channels.length) {
    return (
      <div className="p-4 text-center text-gray-400">
        Not following anyone yet
      </div>
    );
  }

  return (
    <div>
      {channels.map((item) => {
        const channelUser = item.user;

        return (
          <div
            key={item._id}
            className="flex items-center justify-between py-4 border-b"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={channelUser.avatar}
                alt={channelUser.userName}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-medium">{channelUser.fullName}</p>
                <p className="text-sm text-gray-400">
                  @{channelUser.userName}
                </p>
              </div>
            </div>

            {/* Right */}
            <button
              className="px-4 py-2 rounded border border-gray-500 text-gray-300"
            >
              Subscribed
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Following;
