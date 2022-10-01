<script setup>
  import { defineProps, toRefs } from 'vue'; 
  import { useBuilderStore } from '@/stores/builderStore';
  const buildStore = useBuilderStore();
  const props = defineProps(['fieldName', 'label', 'min', 'max']);
  </script>
  
  <template>
    <div class="text-field">
      <label className="field-label" :for="props.fieldName">{{props.label || props.fieldName}}</label>
			<el-input-number size="small" :id="props.fieldName" :min="props.min" :max="props.max" v-model="buildStore[props.fieldName]" :placeholder="props.label" />
    </div>
  </template>