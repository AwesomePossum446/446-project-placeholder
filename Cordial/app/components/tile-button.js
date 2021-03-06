import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import _ from 'lodash';
import {FOOTER_HEIGHT} from '../consts/styles';

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1
	},
	button: {
		flex: 1,
		height: FOOTER_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
});

export default class TileButton extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}
	onPress() {
		if (!this.props.isActive && this.props.onPress) {
			this.props.onPress();
		}
	}
	render() {
		const style = _.concat(this.props.style || {}, styles.button);
		return (
			<TouchableOpacity	style={styles.buttonContainer} onPress={this.onPress}>
				<View style={style}>
					{this.props.children}
				</View>
			</TouchableOpacity>
		);
	}
}
