import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	AdjustmentsVerticalIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<>
      <SafeAreaView className="bg-white pt-5">
        {/* Header */}
				<View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
					<Image
						source={{
							url: "https://links.papareact.com/wru",
						}}
						className="h-7 w-7 bg-gray-300 p-4 rounded-full"
					/>

					<View className="flex-1">
						<Text className="font-bold text-gray-400 text-xs">
							Deliver Now!
						</Text>
						<Text className="font-bold text-xl">
							Current location
							<ChevronDownIcon
								size={20}
								color="#00ccbb"
							/>
						</Text>
					</View>

					<UserIcon size={35} color="#00ccbb" />
				</View>

        {/* Search */}
				<View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
					<View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
						<MagnifyingGlassIcon
							color={"gray"}
							size={20}
						/>

						<TextInput
							placeholder="Restaurant and cuisines"
							keyboardType="default"
						/>
					</View>

					<AdjustmentsVerticalIcon color="#00ccbb" />
        </View>
        
        <ScrollView>

        </ScrollView>
			</SafeAreaView>
		</>
	);
};

export default HomeScreen;
