import { FlatList } from "react-native";

import DetailCard from "../component/DetailCard";
import DetailFooter from "../component/DetailFooter";
import UserDetail from "../component/UserDetail";
import LastButton from "../component/LastButton";

export default function DetailScreen({ navigation, route: { params } }) {
  console.log(params.bids);
  return (
    <>
      <FlatList
        data={[1]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <>
            <DetailCard nftItem={params} onPress={() => navigation.goBack()} />
            <DetailFooter text={params.description} />
            {params.bids?.length > 0 ? (
              <UserDetail users={params.bids} />
            ) : null}
          </>
        )}
      />
      <LastButton />
    </>
  );
}
