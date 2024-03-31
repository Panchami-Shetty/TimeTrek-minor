// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import Background from "./Background";
// import { blue, darkBlue } from "./Constants";
// import Field from "./Field";
// import Button from "./Button";

// const Login = (props) => {
//   return (
//     <Background>
//       <View style={{ alignItems: "center", width: 360 }}>
//         <Text
//           style={{
//             color: "white",
//             fontSize: 50,
//             fontWeight: "bold",
//             marginVertical: 40,
//             marginBottom: 15,
//           }}
//         >
//           Login
//         </Text>
//         <View
//           style={{
//             backgroundColor: "white",
//             height: 750,
//             width: 470,
//             borderTopLeftRadius: 170,
//             paddingTop: 40,
//             alignItems: "center",
//             marginTop: 20,
//           }}
//         >
//           <Text style={{ fontSize: 30, color: blue, fontWeight: "bold" }}>
//             Welcome Back
//           </Text>
//           <Text
//             style={{
//               color: "#a9a9a9",
//               fontSize: 17,
//               fontWeight: "bold",
//               marginBottom: 20,
//             }}
//           >
//             Login to your account
//           </Text>
//           <Field
//             placeholder="Email"
//             keyboardType={"email-address"}
//           />
//           <Field placeholder="Password" secureTextEntry={true} />

//           {/* forgot Password */}
//           <View style={{ alignItems: "flex-end", width: '78%', paddingRight:35, marginBottom:315 }}>
//             {/* <Text style={{ color: blue, fontWeight: "bold", fontSize: 14 }}>
//               Forgot Password ?
//             </Text> */}
//           </View>
//           <Button textColor='white' bgColor={darkBlue} buttonLabel="Login" Press={()=>props.navigation.navigate("Home")} />
//           <View style ={{display: 'flex', flexDirection: 'row', justifyContent:'center'}} >
//             <Text style={{fontSize: 15}}>Don't have an account ? </Text>
//             <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}>
//             <Text style={{color: darkBlue, fontWeight:'bold', fontSize: 15}}>Signup</Text>
//             </TouchableOpacity>
            
//           </View>
//         </View>
//       </View>
//     </Background>
//   );
// };

// // const styles = StyleSheet.create({})

// export default Login;


import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Background from "./Background";
import { blue, darkBlue } from "./Constants";
import Field from "./Field";
import Button from "./Button";
import { Styles } from "./Styles";

const Login = (props) => {
  return (
    <Background>
      <View style={Styles.container}>
        <Text style={Styles.title}>Login</Text>
        <View style={Styles.formContainer}>
          <Text style={Styles.welcomeText}>Welcome Back</Text>
          <Text style={Styles.descriptionText}>Login to your account</Text>
          <Field
            style={Styles.fieldContainer}
            placeholder="Email"
            keyboardType={"email-address"}
          />
          <Field
            style={Styles.fieldContainer}
            placeholder="Password"
            secureTextEntry={true}
          />

          {/* forgot Password */}
          <View style={Styles.forgotPasswordContainer}>
            {/* <Text style={{ color: blue, fontWeight: "bold", fontSize: 14 }}>
              Forgot Password ?
            </Text> */}
          </View>
          <Button
            style={Styles.buttonContainer}
            textColor='white'
            bgColor={darkBlue}
            buttonLabel="Login"
            Press={()=>props.navigation.navigate("Home")}
          />
          <View style={Styles.signUpContainer}>
            <Text style={Styles.signUpText}>Don't have an account ? </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}>
              <Text style={Styles.signUpLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
