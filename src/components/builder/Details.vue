<script setup>
import TextField from "@/components/fields/TextField.vue";
import NumberField from "../fields/NumberField.vue";
import TextAreaField from "../fields/TextAreaField.vue";
import { useBuilderStore } from "@/stores/builderStore";
const buildStore = useBuilderStore();
</script>

<template>
	<el-row class="details-box">
		<el-col :span="8">
			<el-row>
				<el-col :span="12">
					<TextField fieldName="name" label="Character Name"/>
				</el-col>
				<el-col :span="6">
					<NumberField fieldName="level" label="Level" min="1" max="10"/>
				</el-col>
				<el-col :span="6">
					<NumberField fieldName="xp" label="XP" min="0"/>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span=12>
					<TextField fieldName="alignment" label="Alignment"/>
				</el-col>
				<el-col :span=12>
					<TextField fieldName="pronouns" label="Pronouns"/>
				</el-col>
			</el-row>
		</el-col>
		<el-col :span="16">
			<TextAreaField fieldName="description" label="Description"/>
		</el-col>
	</el-row>
</template>