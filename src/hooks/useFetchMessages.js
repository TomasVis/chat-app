import useAxios from "axios-hooks";

function useFetchMessages(people, activeChatRoom) {
  const activeChat = people.find(({ id }) => id === activeChatRoom);
  const [{ data, loading, error }, fetch] = useAxios(
    {
      method: "GET",
      url: `https://api.jsonbin.io/b/${activeChat?.messagesUrl}`,
      headers: {
        "secret-key": process.env.REACT_APP_SECRET,
      },
    },
    { manual: true }
  );
  return { data, loading, error, fetch };
}

export default useFetchMessages;
