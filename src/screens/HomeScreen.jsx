import {
	Image,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	TextInput,
	View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	AdjustmentsVerticalIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../../client";

const HomeScreen = () => {
	const navigation = useNavigation();
	const [featuredCategories, setFeaturedCategories] = useState([]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	useEffect(() => {
		client
			.fetch(
				`
					*[_type == 'featured'] {
						...,
						restaurants[]-> {
							...,
							dishes[]->
						}
					}
				`
			)
			.then((data) => {
				setFeaturedCategories(data);
			});
	}, []);

	// console.log(featuredCategories)

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<SafeAreaView className="bg-white pt-5">
				{/* Header */}
				<View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
					<Image
						source={{
							uri: "https://links.papareact.com/wru",
						}}
						className="h-7 w-7 bg-gray-300 p-4 rounded-full"
					/>

					<View className="flex-1">
						<Text className="font-bold text-gray-400 text-xs">
							Deliver Now!
						</Text>
						<Text className="font-bold text-xl">
							Current location
							<ChevronDownIcon size={20} color="#e1398a" />
						</Text>
					</View>

					<UserIcon size={35} color="#e1398a" />
				</View>

				{/* Search */}
				<View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
					<View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
						<MagnifyingGlassIcon color={"gray"} size={20} />

						<TextInput
							placeholder="Restaurant and cuisines"
							keyboardType="default"
						/>
					</View>

					<AdjustmentsVerticalIcon color="#e1398a" />
				</View>

				<ScrollView
					className="bg-gray-100"
					contentContainerStyle={{
						paddingBottom: 100,
					}}>
					{/* categories */}
					<Categories />

					{/* featured rows */}
					{featuredCategories?.map((category) => (
						<FeaturedRow
							key={category._id}
							id={category._id}
							title={category.name}
							description={category.short_description}
						/>
					))}
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default HomeScreen;
