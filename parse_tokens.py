import json
import re

def to_camel(s):
    s = re.sub(r'[^a-zA-Z0-9]', ' ', s)
    parts = s.split()
    if not parts: return ''
    return parts[0].lower() + ''.join(p.capitalize() for p in parts[1:])

def flatten_tokens(data, prefix=''):
    tokens = {}
    if isinstance(data, dict):
        if '$type' in data and data['$type'] == 'color':
            val = data.get('$value', {})
            if isinstance(val, dict) and 'hex' in val:
                key = to_camel(prefix)
                tokens[key] = val['hex']
            elif isinstance(val, str):
                key = to_camel(prefix)
                tokens[key] = val
        else:
            for k, v in data.items():
                if k.startswith('$'): continue
                new_prefix = f'{prefix}_{k}' if prefix else k
                tokens.update(flatten_tokens(v, new_prefix))
    return tokens

with open('01_Prompt/01_Color Modes/Light.tokens.json', 'r', encoding='utf-8') as f:
    light = json.load(f)
with open('01_Prompt/01_Color Modes/Dark.tokens.json', 'r', encoding='utf-8') as f:
    dark = json.load(f)

light_flat = flatten_tokens(light)
dark_flat = flatten_tokens(dark)

with open('src/theme/tokens.ts', 'w', encoding='utf-8') as f:
    f.write('export const lightColors = {\n')
    for k, v in light_flat.items():
        f.write(f'  {k}: "{v}",\n')
    f.write('};\n\n')
    
    f.write('export const darkColors = {\n')
    for k, v in dark_flat.items():
        f.write(f'  {k}: "{v}",\n')
    f.write('};\n')

print("Successfully wrote src/theme/tokens.ts")
