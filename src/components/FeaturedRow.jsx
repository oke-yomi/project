import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, description, title }) => {
	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="font-bold text-lg">
					{title}
				</Text>
				<ArrowRightIcon color="#00ccbb" />
			</View>

			<Text className="text-xs text-gray-500 px-4">
				{description}
			</Text>

			<ScrollView
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				showsHorizontalScrollIndicator={false}
				className="pt-4">
				{/* restaurant cards */}
				<RestaurantCard
					id={123}
					imgUrl="https://links.papareact.com/gn7"
					title="sushi"
					rating={4.5}
					genre="Japanese"
					address="1 E-Mac Yoroki"
					short_description="Yada yada yada......"
					dishes={[]}
					long={20}
					lat={0}
				/>

				<RestaurantCard
					id={123}
					imgUrl="https://links.papareact.com/gn7"
					title="sushi"
					rating={4.5}
					genre="Japanese"
					address="1 E-Mac Yoroki"
					short_description="Yada yada yada......"
					dishes={[]}
					long={20}
					lat={0}
				/>

				<RestaurantCard
					id={123}
					imgUrl="https://links.papareact.com/gn7"
					title="sushi"
					rating={4.5}
					genre="Japanese"
					address="1 E-Mac Yoroki"
					short_description="Yada yada yada......"
					dishes={[]}
					long={20}
					lat={0}
				/>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;