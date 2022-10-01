<script setup>
  import { defineProps } from 'vue'; 
  import { useBuilderStore } from '@/stores/builderStore';
  const buildStore = useBuilderStore();
  
  const props = defineProps(['fieldName', 'label']);
  </script>
  
  <template>
    <div class="text-field">
      <label className="field-label" :for="props.fieldName">{{props.label || props.fieldName}}</label>
      <textarea type="textarea" class="text-input" :id="props.fieldName" v-model="buildStore[props.fieldName]" :placeholder="props.label"/>
    </div>
  </template>