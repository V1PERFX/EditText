$('#summernote').summernote({
  placeholder: 'Digite aqui seu texto...',
  tabsize: 2,
  height: 450,
  lang: 'pt-BR',
  fontNames: ['Poppins', 'Arial', 'Arial Black', 'Courier New', 'Helvetica Neue', 'Helvetica', 'Chakra Petch', 'Tahoma', 'Times New Roman', 'Verdana'],
  fontSizes: ['8', '9', '10', '11', '12', '14', '16', '18', '24', '36'],
  toolbar: [
    // [groupName, [list of button]]
    ['Font Style', ['fontname', 'fontsize', 'fontsizeunit', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
    ['Paragraph style', ['style', 'ol', 'ul', 'paragraph', 'height']],
    ['Insert', ['picture', 'link', 'video', 'table', 'hr']],
    ['Misc', ['fullscreen', 'codeview', 'undo', 'redo', 'help']]
  ]
});