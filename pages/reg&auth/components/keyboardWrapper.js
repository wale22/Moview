import { View, Text, KeyboardAvoidingView,Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native'
import React from 'react'

export default function KeyboardWrapper({children}) {
  return (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <ScrollView keyboardShouldPersistTaps={'always'}>
                {children}
            </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}