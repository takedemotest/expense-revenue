import { FormFieldConfig } from "../../../../projects/shared-ui/src/lib/models/form-field-model";

export const RECENT_ACTIVITY_CONFIG: FormFieldConfig[] = [
  { name: 'Activity Title', label: 'Activity Title', placeholder: 'e.g., Purchased 500kg cattle feed from KRISHITO Agro..', type: 'text', required: true },

  { name: 'Activity Description / Details', label: 'Activity Description / Details', placeholder: 'e.g., Purchased 500kg cattle feed from KRISHITO Agro..', type: 'text', required: true },
  {
    name: 'Activity Category',
    label: 'Activity Category',
    type: 'select',
    options: [
      { label: 'Animals Operation', value: 'Animals' },
      { label: 'Health', value: 'Health' },
      { label: 'Inventory / SEED / FEED ', value: 'Inventory' },
      { label: 'Milk Production', value: 'Milk Production' }
    ]
  }
]
