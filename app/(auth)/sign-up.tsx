import {View, Text, Alert} from 'react-native'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {useState} from "react";


const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({name: '', email: '', password: '' });

    const submit = async () => {
        const {name, email, password } = form;

        if(!name || !email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsSubmitting(true)
        try {
            // Here you would typically call your authentication API
            // For example: await authService.signIn(email, password);
           Alert.alert('User siged up successfully', `Name: ${name}, Email: ${email}`);
            // Simulate a successful sign-in
            setTimeout(() => {
                setIsSubmitting(false);
                router.push('/profile'); // Redirect to profile after sign-in
            }, 1000);
        } catch (error) {
            setIsSubmitting(false);
            Alert.alert('Error', 'Failed to sign in. Please try again.');
        }
}

    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
                  <CustomInput
                placeholder="Enter your full name"
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
                label="Name"
            
            />
            <CustomInput
                placeholder="Enter your email"
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your password"
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
                label="Password"
                secureTextEntry={true}
            />

            <CustomButton
                title="Sign Up"
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className="flex justify-center mt-5 flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Already have an account?
                </Text>
                <Link href="/sign-in" className="base-bold text-primary">
                    Sign In
                </Link>
            </View>
        </View>
    )
}

export default SignUp