import os
import glob

base_path = r'c:\VaraPrasad Projects\portifolio 1\awesome-landing-pages\src'
script_tag = '<script src="/src/back-button.js"></script>'

for filepath in glob.glob(os.path.join(base_path, '**', 'index.html'), recursive=True):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    if 'back-button.js' not in content:
        # Try to add before </body> first, otherwise before </html>
        if '</body>' in content:
            new_content = content.replace('</body>', script_tag + '\n</body>')
        elif '</html>' in content:
            new_content = content.replace('</html>', script_tag + '\n</html>')
        else:
            print(f'No closing tag found: {os.path.basename(os.path.dirname(filepath))}')
            continue
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Added to: {os.path.basename(os.path.dirname(filepath))}')
    else:
        print(f'Already has script: {os.path.basename(os.path.dirname(filepath))}')
