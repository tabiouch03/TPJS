const p = 'Visages sculptés brodés les uns après les autres là en haut sous les toits à côté des chambres de bonnes.' + 
'Chaque profil est différent égal dans son essence inébranlable dans son destin. Nos regards rêveurs' + 
'se démultiplient quérissant en vain la similitude marque ancestrale cachée dans les cellules. Nous' + 
'cherchons cette statue qui nous ressemble ce sourire identique au même destin de reflétant dans' + 
'la brume des souvenirs tel ce palais en pierre dans le miroir d’eau piétinée par la pureté de nos enfants.' + 
'Nous traversons à nouveau le pont au ralenti la pluie fouettant nos visages nous noie dans la tautologie de la réalité';

let convert = (p) => {
    return p.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
  }
  
  console.log(convert(p))