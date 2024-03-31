// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import Background from "./Background";
// import { blue, darkBlue } from "./Constants";
// import Field from "./Field";
// import Button from "./Button";

// const Signup = (props) => {
//   return (
//     <Background>
//       <View style={{ alignItems: "center", width: 360 }}>
//         <Text
//           style={{
//             color: "white",
//             fontSize: 50,
//             fontWeight: "bold",
//             marginVertical: 40,
//             marginTop: 50,
//             marginBottom:5,
//           }}
//         >
//           Register
//         </Text>
//         <Text style={{color: 'white', fontSize: 16, fontWeight:"bold", marginBottom:10}}>
//             Create a new account
//         </Text>
//         <View
//           style={{
//             backgroundColor: "white",
//             height: 750,
//             width: 470,
//             borderTopLeftRadius: 150,
//             paddingTop: 40,
//             alignItems: "center",
//             marginTop: 20,
//           }}
//         >
        
//           <Field
//             placeholder="First Name"
//           />
//           <Field
//             placeholder="Last Name"
//          />
//           <Field
//             placeholder="Email"
//             keyboardType={"email-address"}
//           />
//           <Field placeholder="Password" secureTextEntry={true} />
//           <Field placeholder="Confirm Password" secureTextEntry={true} />

//           {/* forgot Password */}
//           <View style={{ alignItems: "flex-end", width: '78%', paddingRight:35, marginBottom:181 }}>
//             {/* <Text style={{ color: blue, fontWeight: "bold", fontSize: 14 }}>
//               Forgot Password ?
//             </Text> */}
//           </View>

//           <Button textColor='white' bgColor={darkBlue} buttonLabel="Signup" Press={()=>props.navigation.navigate("Home")} />
//           <View style ={{display: 'flex', flexDirection: 'row', justifyContent:'center'}} >
//             <Text style={{fontSize: 15}}>Already have an account ? </Text>
//             <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
//             <Text style={{color: darkBlue, fontWeight:'bold', fontSize: 15}}>Login</Text>
//             </TouchableOpacity>
            
//           </View>
//         </View>
//       </View>
//     </Background>
//   );
// };

// // const styles = StyleSheet.create({})

// export default Signup;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Background from "./Background";
import { blue, darkBlue } from "./Constants";
import Field from "./Field";
import Button from "./Button";
import { Styles } from "./Styles";

const Signup = (props) => {
  return (
    <Background>
      <View style={Styles.container}>
        <Text style={Styles.title}>Register</Text>
        <Text style={Styles.subtitle}>Create a new account</Text>
        <View style={Styles.formContainer}>
          <Field
            style={Styles.fieldContainer}
            placeholder="First Name"
          />
          <Field
            style={Styles.fieldContainer}
            placeholder="Last Name"
          />
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
          <Field
            style={Styles.fieldContainer}
            placeholder="Confirm Password"
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
            buttonLabel="Signup"
            Press={()=>props.navigation.navigate("Home")}
          />
          <View style={Styles.loginContainer}>
            <Text style={Styles.loginText}>Already have an account ? </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
              <Text style={Styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
